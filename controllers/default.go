package controllers

import "github.com/astaxie/beego"

type MainController struct {
	beego.Controller
}

const (
	SPLITE = "_"

	Polo  = "Polo"
	OKCN  = "OKCN"
	OKCOM = "OKCOM"
	OKEX  = "OKEX"
	Yunbi = "Yunbi"
	BTC38 = "BTC38"
	Jubi  = "Jubi"

	BTC  = "BTC"
	LTC  = "LTC"
	ETH  = "ETH"
	ETC  = "ETC"
	DOGE = "DOGE"
)

func (c *MainController) Get() {
	c.TplName = "index.html"
	c.Data[Polo+SPLITE+BTC] = "555"
	c.Data[OKCN+SPLITE+BTC] = "555"
	c.Data[OKCOM+SPLITE+BTC] = "555"
	c.Data[OKEX+SPLITE+BTC] = "555"
	c.Data[Yunbi+SPLITE+BTC] = "555"
	c.Data[BTC38+SPLITE+BTC] = "555"
	c.Data[Jubi+SPLITE+BTC] = "555"

	c.Data[Polo+SPLITE+LTC] = "11"
	c.Data[OKCN+SPLITE+LTC] = "1"
	c.Data[OKCOM+SPLITE+LTC] = "2"
	c.Data[OKEX+SPLITE+LTC] = "3"
	c.Data[Yunbi+SPLITE+LTC] = "4"
	c.Data[BTC38+SPLITE+LTC] = "4"
	c.Data[Jubi+SPLITE+LTC] = "5"
}
