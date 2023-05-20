module.exports = {
    mount: {
        public: '/',
        src: '/dist'
    },
    plugins:[
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-optimize',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-sass'
    ],
    alias: {
        '~': './src'
    },
    devOptions: {
        //port: 8080 -> 기본 포트 설정이라 따로 할 필요 없음
        open: 'none'
    }
}