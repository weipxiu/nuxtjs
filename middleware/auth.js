export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  console.log(context.route.path )
  if(!/Chrome/.test(context.userAgent)){
    if(context.route.path !='/'){
      context.redirect({path:'/', name: 'index',
      query: { message: '当前不是Chrome浏览器，只允许访问首页' } })
    }
  }
}
