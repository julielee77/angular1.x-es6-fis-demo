/**
 * @file fis配置文件
 * @author lihaizhu
 * @since 2018/01/11
 */
var eslinitConf = require('./.eslintrc');

// 禁用fis3默认的fis-hook-src
fis.unhook('components');
fis.hook('node_modules');

fis.set('project.md5Connector', '.');

// 添加commonjs支持(需要先安装fis3-hook-commonjs)
fis.hook('commonjs', {
    baseUri: './',
    paths: {
        component: 'src/core/components',
        directive: 'src/core/directives',
        filter: 'src/core/filters',
        service: 'src/core/services',
        util: 'src/core/utils',
        page: 'src/page',
        //
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        popper: 'node_modules/popper.js/dist/popper.min'
    },
    extList: ['.js', '.jsx', '.es']
});

// 为node_modules文件添加针对mod.js的转换
fis.match('node_modules/**.js', {
    useSameNameRequire: true,
    isMod: true
});

fis.match('node_modules/(**.{eot,woff,woff2,ttf,svg})', {
    release: 'static/$1'
});

/* release目录指定 */
fis.match('src/**', {
        isMod: true,
        useSameNameRequire: true,
        release: 'static/$0'
    })
    .match('dep/**', {
        isMod: true,
        useMap: true,
        release: 'static/$0'
    });

fis.match('config/development.js', {
    id: 'config',
    isMod: true,
    release: 'static/$0'
});

fis.match('{dep/mod.js,fis-conf.js}', {
    isMod: false
});

fis.match(/^src\/core\/(.*)$/i, {
    id: '$1'
});

fis.match('{api/**.js,src/**.js,config/**.js', {
    lint: fis.plugin('eslinit-noisy', eslinitConf)
});

fis.match('src/page/(*.html)', {
    release: '$1',
    useCache: false
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    postprocessor: fis.plugin('autoprefixer', {
        'browser': ['ie >= 8'],
        'cascade': true
    }),
    rExt: '.css'
}).match('{api/**.js,src/**.js,config/**.js}', {
    parser: fis.plugin('babel-6.x', {
        plugins: ['angularjs-annotate']
    }),
    rExt: '.js'
});

// 添加css和image加载支持
fis.match('*.{js,,jsx,ts,tsx,es}', {
    preprocessor: [
        fis.plugin('js-require-css'),
        fis.plugin('js-require-file', {
            useEmbedWhenSizeLessThan: 10 * 1024
        })
    ]
});

fis.match('::packager', {
    packager: fis.plugin('deps-pack', {
        'static/pkg/app.js': [
            'node_modules/**.js',
            'node_modules/**.js:deps'
        ],
        'static/pkg/app.css': [
            'src/**.js:deps',
            'static/**.{css,less}',
            'static/**.{css,less}:deps'
        ]
    }),
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true
    }),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
});

// ngInject -- ng-annotate

// 生产环境下css/js压缩合并
// fis3 release prod
/* eslint-disabled fecs-camelcase */
fis.media('prod')
    .match('config/production.js', {
        id: 'config',
        isMod: true,
        release: 'satic/$0'
    })
    .match('**.png', {
        optimizer: fis.plugin('png-compressor')
    })
    .match('node_modules/**.js', {
        parser: fis.plugin('babel-6.x', {
            plugins: ['angularjs-annotate']
        }),
        rExt: '.js'
    })
    .match('dep/**.min.{js,css', {
        optimizer: null
    })
    .match('*.{css,less}', {
        optimizer: fis.plugin('clean-css')
    })
    .match('::image', {
        useHash: true
    })
    .match('**.{js,css}', {
        useHash: true
    })
    .match('*.js', {
        parser: fis.plugin('jdists', {
            remove: 'debug'
        })
    })
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            useSourceMap: true,
            'static/pkg/app.bundle.js': [
                'dep/mod.js',
                'src/app/app.js',
                'src/app/app.js:deps'
            ],
            'static/pkg/app.bundle.css': [
                'src/**.js:deps',
                'static/**.{css,less}',
                'static/**.{css,less}:deps'
            ]
        })
    })
/*.match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://xxx/static/receiver.php',
        to: 'xxx'
    })
})*/
;
/* eslint-enable fecs-camelcase */
