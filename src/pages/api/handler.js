/**
 * 
 * @param {请求体} req 
 * @param {响应体} res 
 */
export default function handler(req, res) {
    const { method } = req || {}
    //   '_readableState',   '_events',
    //   '_eventsCount',     '_maxListeners',
    //   'socket',           'httpVersionMajor',
    //   'httpVersionMinor', 'httpVersion',
    //   'complete',         'rawHeaders',
    //   'rawTrailers',      'aborted',
    //   'upgrade',          'url',
    //   'method',           'statusCode',
    //   'statusMessage',    'client',
    //   '_consuming',       '_dumped',
    //   'cookies',          'query',
    //   'previewData',      'preview',
    //   'body'
    console.log('djch 收到请求', Object.keys(req), method)

    // res.status(200).json() 都有哪些方法？
    return res.status(200).send({ message: '服务器已收到文件' });
}