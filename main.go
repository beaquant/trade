package main

import (
	_ "Trade/routers"
	"fmt"
	"net/http"
	"time"

	_ "Trade/controllers"

	"github.com/astaxie/beego"
	"github.com/nntaoli/crypto_coin_api"
	"github.com/nntaoli/crypto_coin_api/btc38"
	"github.com/nntaoli/crypto_coin_api/huobi"
	"github.com/nntaoli/crypto_coin_api/okcoin"
	"github.com/nntaoli/crypto_coin_api/poloniex"
)

var (
	hbAccessKey              = ""
	hbSecretKey              = ""
	HB          *huobi.HuoBi = huobi.New(http.DefaultClient, hbAccessKey, hbSecretKey)

	OKCNAccessKey                      = ""
	OKCNSecretKey                      = ""
	OKCN          *okcoin.OKCoinCN_API = okcoin.New(http.DefaultClient, OKCNAccessKey, OKCNSecretKey)

	Btc38AccessKey = ""
	Btc38SecretKey = ""
	Btc38AccountId = ""
	Btc38          = btc38.New(http.DefaultClient, Btc38AccessKey, Btc38SecretKey, Btc38AccountId)

	poloAPIKey   = ""
	poloscretkey = ""
	POLO         = poloniex.New(http.DefaultClient, poloAPIKey, poloscretkey)
)
var (
	HUOBI_BTC_CNY,
	HUOBI_LTC_CNY,

	OKCN_BTC_CNY,
	OKCN_LTC_CNY,

	POLO_LTC_BTC,
	POLO_LTC_USD *coinapi.Ticker
)

func updateHBTicker() {
	HUOBI_BTC_CNY, _ = HB.GetTicker(coinapi.BTC_CNY)
	HUOBI_LTC_CNY, _ = HB.GetTicker(coinapi.LTC_CNY)
	fmt.Println("HUOBI_BTC_CNY:", HUOBI_BTC_CNY, "HUOBI_LTC_CNY:", HUOBI_LTC_CNY)

}
func updateOKCNTicker() {
	OKCN_BTC_CNY, _ = OKCN.GetTicker(coinapi.BTC_CNY)
	OKCN_LTC_CNY, _ = OKCN.GetTicker(coinapi.LTC_CNY)
	fmt.Println("OKCN_BTC_CNY:", OKCN_BTC_CNY, "OKCN_LTC_CNY:", OKCN_LTC_CNY)
}
func updatePoloTicker() {
	POLO_LTC_BTC, _ = POLO.GetTicker(coinapi.LTC_BTC)
	//	POLO_LTC_USD, _ = POLO.GetTicker(coinapi.LTC_USD)
	fmt.Println("POLO_LTC_BTC:", POLO_LTC_BTC)
}
func updateAllTicker() {
	go updateHBTicker()
	go updateOKCNTicker()
	go updatePoloTicker()
}

func timer5s() {
	timer5s := time.NewTicker(5 * time.Second)
	for {
		select {
		case <-timer5s.C:
			updateAllTicker()

		}
	}
}
func main() {
	go timer5s()
	beego.Run()
}
