self.__uv$config = {
    prefix: '/l2x/isbetter/',
    bare:'https://loungef2x.koyeb.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/l2x/uv.handler.js',
    bundle: '/l2x/uv.bundle.js',
    config: '/l2x/uv.config.js',
    sw: '/l2x/uv.sw.js',
};
