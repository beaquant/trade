package routers

import (
	"github.com/huzhihao2002/trade/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
}
