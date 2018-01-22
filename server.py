import web
import json
urls = (  '/', 'index', )

render = web.template.render('Views')


class index:
    def GET(self):
        print("Hello world")
        return render.home()
    def POST(self):
        data = json.loads(web.data())
        print data
        #function (data)
        return data


if __name__ == '__main__':
    web.application(urls, globals()).run()


# def function (data):
