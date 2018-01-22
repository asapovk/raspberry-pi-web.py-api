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
        #Здесь ты вызываешь свою фукцию, которая принимает данные data и делает с ними то что
        # тебе нужно    
        return data


if __name__ == '__main__':
    web.application(urls, globals()).run()
