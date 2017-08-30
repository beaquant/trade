		    var XMLHttpReq;
	        //创建XMLHttpRequest对象
	        function createXMLHttpRequest() {
	            if(window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	                XMLHttpReq = new XMLHttpRequest();  
	            }  
	            else if (window.ActiveXObject) { // IE浏览器  
	                try {  
	                    XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");  
	                } catch (e) {  
	                    try {  
	                        XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");  
	                    } catch (e) {}  
	                }  
	            }  
	        }
	        //发送请求函数  
	        function sendRequest() {  
	            createXMLHttpRequest();
	            var url = "/tradedata";
	            XMLHttpReq.open("GET", url, true);  
	            XMLHttpReq.onreadystatechange = processResponse;//指定响应函数  
	            XMLHttpReq.send(null);  // 发送请求 
 	        }  
	        // 处理返回信息函数  
	        function processResponse() {  
	            if (XMLHttpReq.readyState == 4) { // 判断对象状态  
	                if (XMLHttpReq.status == 200) { // 信息已经成功返回，开始处理信息  
	                    DisplayHot();  
	                    setTimeout("sendRequest()", 3000);  
	                } else { //页面不正常  
	                    window.alert("您所请求的页面有异常。");  
	                }  
	            }  
	        }  
	        function DisplayHot() { 
             	var rsp = XMLHttpReq.responseText;  
				var jsonObj = JSON.parse( rsp ); 

				document.getElementById("POLO_BTC").innerHTML = jsonObj.POLO.BTC.CNY.toFixed(4);
				document.getElementById("POLO_BCC").innerHTML = jsonObj.POLO.BCC.CNY.toFixed(4);
				document.getElementById("POLO_LTC").innerHTML = jsonObj.POLO.LTC.CNY.toFixed(4);
				document.getElementById("POLO_ETH").innerHTML = jsonObj.POLO.ETH.CNY.toFixed(4);
				document.getElementById("POLO_ETC").innerHTML = jsonObj.POLO.ETC.CNY.toFixed(4);
				document.getElementById("POLO_DOGE").innerHTML = jsonObj.POLO.DOGE.CNY.toFixed(4);
				document.getElementById("POLO_XRP").innerHTML = jsonObj.POLO.XRP.CNY.toFixed(4);
				document.getElementById("POLO_BLK").innerHTML = jsonObj.POLO.BLK.CNY.toFixed(4);
				document.getElementById("POLO_LSK").innerHTML = jsonObj.POLO.LSK.CNY.toFixed(4);
				document.getElementById("POLO_GAME").innerHTML = jsonObj.POLO.GAME.CNY.toFixed(4);
				document.getElementById("POLO_SC").innerHTML = jsonObj.POLO.SC.CNY.toFixed(4);
				document.getElementById("POLO_BTS").innerHTML = jsonObj.POLO.BTS.CNY.toFixed(4);
				document.getElementById("POLO_XEM").innerHTML = jsonObj.POLO.XEM.CNY.toFixed(4);
				document.getElementById("POLO_PPC").innerHTML = jsonObj.POLO.PPC.CNY.toFixed(4);
				document.getElementById("POLO_XPM").innerHTML = jsonObj.POLO.XPM.CNY.toFixed(4);
				document.getElementById("POLO_VTC").innerHTML = jsonObj.POLO.VTC.CNY.toFixed(4);
				document.getElementById("POLO_VRC").innerHTML = jsonObj.POLO.VRC.CNY.toFixed(4);
				document.getElementById("POLO_NXT").innerHTML = jsonObj.POLO.NXT.CNY.toFixed(4);
				document.getElementById("POLO_SYS").innerHTML = jsonObj.POLO.SYS.CNY.toFixed(4);
				document.getElementById("POLO_DASH").innerHTML = jsonObj.POLO.DASH.CNY.toFixed(4);
				document.getElementById("POLO_RIC").innerHTML = jsonObj.POLO.RIC.CNY.toFixed(4);
				document.getElementById("POLO_NMC").innerHTML = jsonObj.POLO.NMC.CNY.toFixed(4);
				document.getElementById("POLO_XCP").innerHTML = jsonObj.POLO.XCP.CNY.toFixed(4);
				document.getElementById("POLO_XMR").innerHTML = jsonObj.POLO.XMR.CNY.toFixed(4);
				document.getElementById("POLO_ARDR").innerHTML = jsonObj.POLO.ARDR.CNY.toFixed(4);
				document.getElementById("POLO_GNT").innerHTML = jsonObj.POLO.GNT.CNY.toFixed(4);


				document.getElementById("BITTREX_BTC").innerHTML = jsonObj.BITTREX.BTC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_BCC").innerHTML = jsonObj.BITTREX.BCC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_LTC").innerHTML = jsonObj.BITTREX.LTC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_ETH").innerHTML = jsonObj.BITTREX.ETH.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_DOGE").innerHTML = jsonObj.BITTREX.DOGE.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.DOGE.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_XRP").innerHTML = jsonObj.BITTREX.XRP.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.XRP.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_BLK").innerHTML = jsonObj.BITTREX.BLK.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.BLK.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_LSK").innerHTML = jsonObj.BITTREX.LSK.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.LSK.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_GAME").innerHTML = jsonObj.BITTREX.GAME.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.GAME.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_SC").innerHTML = jsonObj.BITTREX.SC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.SC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_BTS").innerHTML = jsonObj.BITTREX.BTS.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.BTS.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_XEM").innerHTML = jsonObj.BITTREX.XEM.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.XEM.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_PPC").innerHTML = jsonObj.BITTREX.PPC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.PPC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_VTC").innerHTML = jsonObj.BITTREX.VTC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.VTC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_VRC").innerHTML = jsonObj.BITTREX.VRC.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.VRC.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_NXT").innerHTML = jsonObj.BITTREX.NXT.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.NXT.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_SYS").innerHTML = jsonObj.BITTREX.SYS.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.SYS.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_DASH").innerHTML = jsonObj.BITTREX.DASH.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.DASH.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_ANS").innerHTML = jsonObj.BITTREX.ANS.CNY.toFixed(4);
				document.getElementById("BITTREX_ZEC").innerHTML = jsonObj.BITTREX.ZEC.CNY.toFixed(4);
				document.getElementById("BITTREX_QTUM").innerHTML = jsonObj.BITTREX.QTUM.CNY.toFixed(4);
				document.getElementById("BITTREX_DGD").innerHTML = jsonObj.BITTREX.DGD.CNY.toFixed(4);
				document.getElementById("BITTREX_1ST").innerHTML = jsonObj.BITTREX.FIRST.CNY.toFixed(4);
				document.getElementById("BITTREX_BAT").innerHTML = jsonObj.BITTREX.BAT.CNY.toFixed(4);
				document.getElementById("BITTREX_SNT").innerHTML = jsonObj.BITTREX.SNT.CNY.toFixed(4);
				document.getElementById("BITTREX_PAY").innerHTML = jsonObj.BITTREX.PAY.CNY.toFixed(4);
				document.getElementById("BITTREX_OMG").innerHTML = jsonObj.BITTREX.OMG.CNY.toFixed(4);
				document.getElementById("BITTREX_XCP").innerHTML = jsonObj.BITTREX.XCP.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.XCP.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_XMR").innerHTML = jsonObj.BITTREX.XMR.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.XMR.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_ARDR").innerHTML = jsonObj.BITTREX.ARDR.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.ARDR.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_GNT").innerHTML = jsonObj.BITTREX.GNT.CNY.toFixed(4)+"  ("+jsonObj.BITTREX.GNT.Percent.toFixed(1)+"%)";
				document.getElementById("BITTREX_XLM").innerHTML = jsonObj.BITTREX.XLM.CNY.toFixed(4);
				document.getElementById("BITTREX_EMC").innerHTML = jsonObj.BITTREX.EMC.CNY.toFixed(4);
				document.getElementById("BITTREX_XZC").innerHTML = jsonObj.BITTREX.XZC.CNY.toFixed(4);
				document.getElementById("BITTREX_BNT").innerHTML = jsonObj.BITTREX.BNT.CNY.toFixed(4);
				document.getElementById("BITTREX_FTC").innerHTML = jsonObj.BITTREX.FTC.CNY.toFixed(4);
				document.getElementById("BITTREX_CVC").innerHTML = jsonObj.BITTREX.CVC.CNY.toFixed(4);
				
				
				document.getElementById("OKCN_BTC").innerHTML = jsonObj.OKCN.BTC.CNY.toFixed(4)+"  ("+jsonObj.OKCN.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("OKCN_BCC").innerHTML = jsonObj.OKCN.BCC.CNY.toFixed(4)+"  ("+jsonObj.OKCN.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("OKCN_LTC").innerHTML = jsonObj.OKCN.LTC.CNY.toFixed(4)+"  ("+jsonObj.OKCN.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("OKCN_ETH").innerHTML = jsonObj.OKCN.ETH.CNY.toFixed(4)+"  ("+jsonObj.OKCN.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("OKCN_ETC").innerHTML = jsonObj.OKCN.ETC.CNY.toFixed(4)+"  ("+jsonObj.OKCN.ETC.Percent.toFixed(1)+"%)";
				

				document.getElementById("HUOBI_BTC").innerHTML = jsonObj.HUOBI.BTC.CNY.toFixed(4)+"  ("+jsonObj.HUOBI.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("HUOBI_LTC").innerHTML = jsonObj.HUOBI.LTC.CNY.toFixed(4)+"  ("+jsonObj.HUOBI.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("HUOBI_BCC").innerHTML = jsonObj.HUOBI.BCC.CNY.toFixed(4)+"  ("+jsonObj.HUOBI.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("HUOBI_ETH").innerHTML = jsonObj.HUOBI.ETH.CNY.toFixed(4)+"  ("+jsonObj.HUOBI.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("HUOBI_ETC").innerHTML = jsonObj.HUOBI.ETC.CNY.toFixed(4)+"  ("+jsonObj.HUOBI.ETC.Percent.toFixed(1)+"%)";
				

				document.getElementById("YUNBI_BTC").innerHTML = jsonObj.YUNBI.BTC.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_BCC").innerHTML = jsonObj.YUNBI.BCC.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_ETH").innerHTML = jsonObj.YUNBI.ETH.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_ETC").innerHTML = jsonObj.YUNBI.ETC.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.ETC.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_SC").innerHTML = jsonObj.YUNBI.SC.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.SC.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_BTS").innerHTML = jsonObj.YUNBI.BTS.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.BTS.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_ANS").innerHTML = jsonObj.YUNBI.ANS.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.ANS.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_ZEC").innerHTML = jsonObj.YUNBI.ZEC.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.ZEC.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_EOS").innerHTML = jsonObj.YUNBI.EOS.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.EOS.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_QTUM").innerHTML = jsonObj.YUNBI.QTUM.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.QTUM.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_DGD").innerHTML = jsonObj.YUNBI.DGD.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.DGD.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_REP").innerHTML = jsonObj.YUNBI.REP.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.REP.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_1ST").innerHTML = jsonObj.YUNBI.FIRST.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.FIRST.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_SNT").innerHTML = jsonObj.YUNBI.SNT.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.SNT.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_OMG").innerHTML = jsonObj.YUNBI.OMG.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.OMG.Percent.toFixed(1)+"%)";
				document.getElementById("YUNBI_GNT").innerHTML = jsonObj.YUNBI.GNT.CNY.toFixed(4)+"  ("+jsonObj.YUNBI.GNT.Percent.toFixed(1)+"%)";
				
				
				document.getElementById("BTC38_BTC").innerHTML = jsonObj.BTC38.BTC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_BCC").innerHTML = jsonObj.BTC38.BCC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_LTC").innerHTML = jsonObj.BTC38.LTC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_ETH").innerHTML = jsonObj.BTC38.ETH.CNY.toFixed(4)+"  ("+jsonObj.BTC38.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_ETC").innerHTML = jsonObj.BTC38.ETC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.ETC.Percent.toFixed(1)+"%)"
				document.getElementById("BTC38_DOGE").innerHTML = jsonObj.BTC38.DOGE.CNY.toFixed(4)+"  ("+jsonObj.BTC38.DOGE.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XRP").innerHTML = jsonObj.BTC38.XRP.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XRP.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_BLK").innerHTML = jsonObj.BTC38.BLK.CNY.toFixed(4)+"  ("+jsonObj.BTC38.BLK.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_BTS").innerHTML = jsonObj.BTC38.BTS.CNY.toFixed(4)+"  ("+jsonObj.BTC38.BTS.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XEM").innerHTML = jsonObj.BTC38.XEM.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XEM.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_PPC").innerHTML = jsonObj.BTC38.PPC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.PPC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XPM").innerHTML = jsonObj.BTC38.XPM.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XPM.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XEM").innerHTML = jsonObj.BTC38.XEM.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XEM.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_NXT").innerHTML = jsonObj.BTC38.NXT.CNY.toFixed(4)+"  ("+jsonObj.BTC38.NXT.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_SYS").innerHTML = jsonObj.BTC38.SYS.CNY.toFixed(4)+"  ("+jsonObj.BTC38.SYS.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_DASH").innerHTML = jsonObj.BTC38.DASH.CNY.toFixed(4)+"  ("+jsonObj.BTC38.DASH.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_RIC").innerHTML = jsonObj.BTC38.RIC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.RIC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_ZCC").innerHTML = jsonObj.BTC38.ZCC.CNY.toFixed(4);
				document.getElementById("BTC38_WDC").innerHTML = jsonObj.BTC38.WDC.CNY.toFixed(4);
				document.getElementById("BTC38_EAC").innerHTML = jsonObj.BTC38.EAC.CNY.toFixed(4);
				document.getElementById("BTC38_HLB").innerHTML = jsonObj.BTC38.HLB.CNY.toFixed(4);
				document.getElementById("BTC38_ARDR").innerHTML = jsonObj.BTC38.ARDR.CNY.toFixed(4)+"  ("+jsonObj.BTC38.ARDR.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XLM").innerHTML = jsonObj.BTC38.XLM.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XLM.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_EMC").innerHTML = jsonObj.BTC38.EMC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.EMC.Percent.toFixed(1)+"%)";
				document.getElementById("BTC38_XZC").innerHTML = jsonObj.BTC38.XZC.CNY.toFixed(4)+"  ("+jsonObj.BTC38.XZC.Percent.toFixed(1)+"%)";
				
				document.getElementById("JUBI_BTC").innerHTML = jsonObj.JUBI.BTC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_BCC").innerHTML = jsonObj.JUBI.BCC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_LTC").innerHTML = jsonObj.JUBI.LTC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_ETH").innerHTML = jsonObj.JUBI.ETH.CNY.toFixed(4)+"  ("+jsonObj.JUBI.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_ETC").innerHTML = jsonObj.JUBI.ETC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.ETC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_DOGE").innerHTML = jsonObj.JUBI.DOGE.CNY.toFixed(4)+"  ("+jsonObj.JUBI.DOGE.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_XRP").innerHTML = jsonObj.JUBI.XRP.CNY.toFixed(4)+"  ("+jsonObj.JUBI.XRP.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_BLK").innerHTML = jsonObj.JUBI.BLK.CNY.toFixed(4)+"  ("+jsonObj.JUBI.BLK.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_LSK").innerHTML = jsonObj.JUBI.LSK.CNY.toFixed(4)+"  ("+jsonObj.JUBI.LSK.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_GAME").innerHTML = jsonObj.JUBI.GAME.CNY.toFixed(4)+"  ("+jsonObj.JUBI.GAME.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_SC").innerHTML = "-";<!--jsonObj.JUBI.SC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.SC.Percent.toFixed(1)+"%)";-->
				document.getElementById("JUBI_BTS").innerHTML = jsonObj.JUBI.BTS.CNY.toFixed(4)+"  ("+jsonObj.JUBI.BTS.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_PPC").innerHTML = jsonObj.JUBI.PPC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.PPC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_XPM").innerHTML = jsonObj.JUBI.XPM.CNY.toFixed(4)+"  ("+jsonObj.JUBI.XPM.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_VTC").innerHTML = jsonObj.JUBI.VTC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.VTC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_VRC").innerHTML = jsonObj.JUBI.VRC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.VRC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_NXT").innerHTML = jsonObj.JUBI.NXT.CNY.toFixed(4)+"  ("+jsonObj.JUBI.NXT.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_ANS").innerHTML = jsonObj.JUBI.ANS.CNY.toFixed(4)+"  ("+jsonObj.JUBI.ANS.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_ZCC").innerHTML = jsonObj.JUBI.ZCC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.ZCC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_WDC").innerHTML = jsonObj.JUBI.WDC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.WDC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_EAC").innerHTML = jsonObj.JUBI.EAC.CNY.toFixed(4)+"  ("+jsonObj.JUBI.EAC.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_HLB").innerHTML = jsonObj.JUBI.HLB.CNY.toFixed(4)+"  ("+jsonObj.JUBI.HLB.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_QTUM").innerHTML = jsonObj.JUBI.QTUM.CNY.toFixed(4)+"  ("+jsonObj.JUBI.QTUM.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_EOS").innerHTML = jsonObj.JUBI.EOS.CNY.toFixed(4)+"  ("+jsonObj.JUBI.EOS.Percent.toFixed(1)+"%)";
				document.getElementById("JUBI_BTM").innerHTML = jsonObj.JUBI.BTM.CNY.toFixed(4);

				document.getElementById("CHBTC_BTC").innerHTML = jsonObj.CHBTC.BTC.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_LTC").innerHTML = jsonObj.CHBTC.LTC.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_ETH").innerHTML = jsonObj.CHBTC.ETH.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_ETC").innerHTML = jsonObj.CHBTC.ETC.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.ETC.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_BTS").innerHTML = jsonObj.CHBTC.BTS.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.BTS.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_QTUM").innerHTML = jsonObj.CHBTC.QTUM.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.QTUM.Percent.toFixed(1)+"%)";
				document.getElementById("CHBTC_EOS").innerHTML = jsonObj.CHBTC.EOS.CNY.toFixed(4)+"  ("+jsonObj.CHBTC.EOS.Percent.toFixed(1)+"%)";

                document.getElementById("LIQUI_BTC").innerHTML = jsonObj.LIQUI.BTC.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.BTC.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_BCC").innerHTML = jsonObj.LIQUI.BCC.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.BCC.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_LTC").innerHTML = jsonObj.LIQUI.LTC.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.LTC.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_ETH").innerHTML = jsonObj.LIQUI.ETH.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.ETH.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_DASH").innerHTML = jsonObj.LIQUI.DASH.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.DASH.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_ANS").innerHTML = jsonObj.LIQUI.ANS.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.ANS.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_QTUM").innerHTML = jsonObj.LIQUI.QTUM.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.QTUM.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_DGD").innerHTML = jsonObj.LIQUI.DGD.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.DGD.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_REP").innerHTML = jsonObj.LIQUI.REP.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.REP.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_1ST").innerHTML = jsonObj.LIQUI.FIRST.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.FIRST.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_EOS").innerHTML = jsonObj.LIQUI.EOS.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.EOS.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_BAT").innerHTML = jsonObj.LIQUI.BAT.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.BAT.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_SNT").innerHTML = jsonObj.LIQUI.SNT.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.SNT.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_PAY").innerHTML = jsonObj.LIQUI.PAY.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.PAY.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_OMG").innerHTML = jsonObj.LIQUI.OMG.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.OMG.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_GNT").innerHTML = jsonObj.LIQUI.GNT.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.GNT.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_XZC").innerHTML = jsonObj.LIQUI.XZC.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.XZC.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_BNT").innerHTML = jsonObj.LIQUI.BNT.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.BNT.Percent.toFixed(1)+"%)";
                document.getElementById("LIQUI_CVC").innerHTML = jsonObj.LIQUI.CVC.CNY.toFixed(4)+"  ("+jsonObj.LIQUI.CVC.Percent.toFixed(1)+"%)";
                
				
				document.getElementById("BITFINEX_BTC").innerHTML = jsonObj.BITFINEX.BTC.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.BTC.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_BCC").innerHTML = jsonObj.BITFINEX.BCC.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.BCC.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_LTC").innerHTML = jsonObj.BITFINEX.LTC.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.LTC.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_ETH").innerHTML = jsonObj.BITFINEX.ETH.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.ETH.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_ETC").innerHTML = jsonObj.BITFINEX.ETC.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.ETC.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_XRP").innerHTML = jsonObj.BITFINEX.XRP.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.XRP.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_DASH").innerHTML = jsonObj.BITFINEX.DASH.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.DASH.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_ZEC").innerHTML = jsonObj.BITFINEX.ZEC.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.ZEC.Percent.toFixed(1)+"%)";
				document.getElementById("BITFINEX_EOS").innerHTML = jsonObj.BITFINEX.EOS.CNY.toFixed(4);
				document.getElementById("BITFINEX_XMR").innerHTML = jsonObj.BITFINEX.XMR.CNY.toFixed(4)+"  ("+jsonObj.BITFINEX.ZEC.Percent.toFixed(1)+"%)";
				
                document.getElementById("BTER_BTC").innerHTML = jsonObj.BTER.BTC.CNY.toFixed(4)+"  ("+jsonObj.BTER.BTC.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_LTC").innerHTML = jsonObj.BTER.LTC.CNY.toFixed(4)+"  ("+jsonObj.BTER.LTC.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_ETH").innerHTML = jsonObj.BTER.ETH.CNY.toFixed(4)+"  ("+jsonObj.BTER.ETH.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_ETC").innerHTML = jsonObj.BTER.ETC.CNY.toFixed(4)+"  ("+jsonObj.BTER.ETC.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_DOGE").innerHTML = jsonObj.BTER.DOGE.CNY.toFixed(4)+"  ("+jsonObj.BTER.DOGE.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_XRP").innerHTML = jsonObj.BTER.XRP.CNY.toFixed(4)+"  ("+jsonObj.BTER.XRP.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_BTS").innerHTML = jsonObj.BTER.BTS.CNY.toFixed(4)+"  ("+jsonObj.BTER.BTS.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_XEM").innerHTML = jsonObj.BTER.XEM.CNY.toFixed(4)+"  ("+jsonObj.BTER.XEM.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_PPC").innerHTML = jsonObj.BTER.PPC.CNY.toFixed(4)+"  ("+jsonObj.BTER.PPC.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_XPM").innerHTML = jsonObj.BTER.XPM.CNY.toFixed(4)+"  ("+jsonObj.BTER.XPM.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_NXT").innerHTML = jsonObj.BTER.NXT.CNY.toFixed(4)+"  ("+jsonObj.BTER.NXT.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_DASH").innerHTML = jsonObj.BTER.DASH.CNY.toFixed(4)+"  ("+jsonObj.BTER.DASH.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_ZEC").innerHTML = jsonObj.BTER.ZEC.CNY.toFixed(4)+"  ("+jsonObj.BTER.ZEC.Percent.toFixed(1)+"%)";
                document.getElementById("BTER_QTUM").innerHTML = jsonObj.BTER.QTUM.CNY.toFixed(4)+"  ("+jsonObj.BTER.QTUM.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_REP").innerHTML = jsonObj.BTER.REP.CNY.toFixed(4)+"  ("+jsonObj.BTER.REP.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_EOS").innerHTML = jsonObj.BTER.EOS.CNY.toFixed(4)+"  ("+jsonObj.BTER.EOS.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_BAT").innerHTML = jsonObj.BTER.BAT.CNY.toFixed(4)+"  ("+jsonObj.BTER.BAT.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_SNT").innerHTML = jsonObj.BTER.SNT.CNY.toFixed(4)+"  ("+jsonObj.BTER.SNT.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_PAY").innerHTML = jsonObj.BTER.PAY.CNY.toFixed(4)+"  ("+jsonObj.BTER.PAY.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_OMG").innerHTML = jsonObj.BTER.OMG.CNY.toFixed(4)+"  ("+jsonObj.BTER.OMG.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_NMC").innerHTML = jsonObj.BTER.NMC.CNY.toFixed(4)+"  ("+jsonObj.BTER.NMC.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_XCP").innerHTML = jsonObj.BTER.XCP.CNY.toFixed(4)+"  ("+jsonObj.BTER.XCP.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_XMR").innerHTML = jsonObj.BTER.XMR.CNY.toFixed(4)+"  ("+jsonObj.BTER.XMR.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_FTC").innerHTML = jsonObj.BTER.FTC.CNY.toFixed(4)+"  ("+jsonObj.BTER.FTC.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_BTM").innerHTML = jsonObj.BTER.BTM.CNY.toFixed(4)+"  ("+jsonObj.BTER.BTM.Percent.toFixed(1)+"%)";
				document.getElementById("BTER_CVC").innerHTML = jsonObj.BTER.CVC.CNY.toFixed(4)+"  ("+jsonObj.BTER.CVC.Percent.toFixed(1)+"%)";
				
				
				
				document.getElementById("BIAN_BTC").innerHTML = jsonObj.BIAN.BTC.CNY.toFixed(4)+"  ("+jsonObj.BIAN.BTC.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_LTC").innerHTML = jsonObj.BIAN.LTC.CNY.toFixed(4)+"  ("+jsonObj.BIAN.LTC.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_ETH").innerHTML = jsonObj.BIAN.ETH.CNY.toFixed(4)+"  ("+jsonObj.BIAN.ETH.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_BCC").innerHTML = jsonObj.BIAN.BCC.CNY.toFixed(4)+"  ("+jsonObj.BIAN.BCC.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_ANS").innerHTML = jsonObj.BIAN.ANS.CNY.toFixed(4)+"  ("+jsonObj.BIAN.ANS.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_QTUM").innerHTML = jsonObj.BIAN.QTUM.CNY.toFixed(4)+"  ("+jsonObj.BIAN.QTUM.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_EOS").innerHTML = jsonObj.BIAN.EOS.CNY.toFixed(4)+"  ("+jsonObj.BIAN.EOS.Percent.toFixed(1)+"%)";
                document.getElementById("BIAN_SNT").innerHTML = jsonObj.BIAN.SNT.CNY.toFixed(4)+"  ("+jsonObj.BIAN.SNT.Percent.toFixed(1)+"%)";
				document.getElementById("BIAN_BNT").innerHTML = jsonObj.BIAN.BNT.CNY.toFixed(4)+"  ("+jsonObj.BIAN.BNT.Percent.toFixed(1)+"%)";
				document.getElementById("BIAN_BTM").innerHTML = jsonObj.BIAN.BTM.CNY.toFixed(4)+"  ("+jsonObj.BIAN.BTM.Percent.toFixed(1)+"%)";
			} 

