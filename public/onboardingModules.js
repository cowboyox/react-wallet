var onboardingModules=function(e){"use strict";function t(){return function(e){var t=e.walletName,n=e.address,o=e.connect;if(!n)return{heading:"Login and Authorize Your Wallet",description:"This dapp requires access to your wallet, please login and authorize access to your ".concat(t," accounts to continue."),eventCode:"loginFail",action:o,icon:'\n        <svg height="14" viewBox="0 0 18 14" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m10.29375 4.05351563c0-.04921875 0-.09140625 0-.13007813 0-1.0546875 0-2.109375 0-3.1640625 0-.43945312.3480469-.76992188.7804688-.7453125.2003906.01054688.3585937.10546875.4992187.24609375.5800781.58359375 1.1566406 1.16367188 1.7367187 1.74023438 1.4695313 1.46953125 2.9390625 2.93906249 4.4050782 4.40859375.1335937.13359375.2425781.27421875.2707031.46757812.0351562.20742188-.0246094.421875-.1652344.58007813-.0246094.028125-.0492187.05273437-.0738281.08085937-2.0601563 2.06367188-4.1203125 4.1238281-6.1804688 6.1875-.2109375.2109375-.4570312.3023438-.7453125.2179688-.2707031-.0808594-.4464843-.2707032-.5132812-.5484375-.0140625-.0738282-.0175781-.1441407-.0140625-.2179688 0-1.0335937 0-2.0707031 0-3.1042969 0-.0386719 0-.08085935 0-.13359372h-5.06953125c-.49570313 0-.80507813-.309375-.80507813-.80859375 0-1.42382813 0-2.84414063 0-4.26796875 0-.49570313.30585938-.8015625.8015625-.8015625h4.93593748z"/><path d="m5.69882812 13.978125h-4.01132812c-.928125 0-1.6875-.8753906-1.6875-1.9511719v-10.06171872c0-1.07578125.75585938-1.95117188 1.6875-1.95117188h4.01132812c.34101563 0 .61523438.31992188.61523438.71015625 0 .39023438-.27421875.71015625-.61523438.71015625h-4.01132812c-.253125 0-.45703125.23554688-.45703125.52734375v10.06171875c0 .2917969.20390625.5273437.45703125.5273437h4.01132812c.34101563 0 .61523438.3199219.61523438.7101563s-.27773438.7171875-.61523438.7171875z"/></g></svg>\n        '}}}function n(e){switch(e){case 1:return"main";case 3:return"ropsten";case 4:return"rinkeby";case 5:return"goerli";case 42:return"kovan";case"localhost":return"localhost";default:return"local"}}function o(e){return function(t){var o=t.network,c=t.selectWallet,r=t.exitPrepareWallet;if(o!=(e||"1"))return{heading:"You Must Change Networks",description:"Blockchain applications have different networks they can work on. Think of this like making sure you're on Netflix vs Hulu to watch your favorite show. We've detected that you need to switch your wallet's network from <b>".concat(n(Number(o)),"</b> to <b>").concat(n(Number(e))," network</b> for this Dapp. <br><br> <i>*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),eventCode:"networkFail",button:{onclick:function(){r(),c()},text:"Switch Wallet"},icon:'\n        <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m13.375 28c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.504-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.504 1.125-1.125-.505125-1.125-1.125-1.125zm0-6.75c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.505125-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.505125-1.125-1.125-1.125zm11.25 4.5c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.621 0-1.125.505125-1.125 1.125s.504 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.504-1.125-1.125-1.125zm-11.25 10.117125h-.014625c-.615375-.007875-1.110375-.50175-1.110375-1.117125 0-1.35675.898875-3.375 3.375-3.375h6.75c.50625-.0135 1.125-.219375 1.125-1.125v-1.125c0-.621.502875-1.125 1.125-1.125s1.125.504 1.125 1.125v1.125c0 2.476125-2.01825 3.375-3.375 3.375h-6.75c-.905625 0-1.1115.61875-1.125 1.1385-.01575.610875-.51525 1.103625-1.125 1.103625zm0 1.132875c-.621 0-1.125-.502875-1.125-1.125v-6.75c0-.621.504-1.125 1.125-1.125s1.125.504 1.125 1.125v6.75c0 .622125-.504 1.125-1.125 1.125z" fill="currentColor" transform="translate(-10 -10)"/></svg>\n        '}}}function c(e){return function(t){if(t.balance<(e||0))return{heading:"Get Some ETH",description:"Your current account has less than the necessary minimum balance of ".concat(e/1e18," ETH."),eventCode:"nsfFail",icon:'\n        <svg height="18" viewBox="0 0 429 695" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m0 394 213 126.228516 214-126.228516-214 301z"/><path d="m0 353.962264 213.5-353.962264 213.5 353.962264-213.5 126.037736z"/></g></svg>\n        '}}}return e.balance=c,e.connect=t,e.initModules=function(e){var t=e.networkId,n=e.minimumBalance;return[function(e){var t=e.walletName,n=e.address,o=e.connect;if(!n)return{heading:"Login and Authorize Your Wallet",description:"This dapp requires access to your wallet, please login and authorize access to your ".concat(t," accounts to continue."),eventCode:"loginFail",action:o,icon:'\n        <svg height="14" viewBox="0 0 18 14" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m10.29375 4.05351563c0-.04921875 0-.09140625 0-.13007813 0-1.0546875 0-2.109375 0-3.1640625 0-.43945312.3480469-.76992188.7804688-.7453125.2003906.01054688.3585937.10546875.4992187.24609375.5800781.58359375 1.1566406 1.16367188 1.7367187 1.74023438 1.4695313 1.46953125 2.9390625 2.93906249 4.4050782 4.40859375.1335937.13359375.2425781.27421875.2707031.46757812.0351562.20742188-.0246094.421875-.1652344.58007813-.0246094.028125-.0492187.05273437-.0738281.08085937-2.0601563 2.06367188-4.1203125 4.1238281-6.1804688 6.1875-.2109375.2109375-.4570312.3023438-.7453125.2179688-.2707031-.0808594-.4464843-.2707032-.5132812-.5484375-.0140625-.0738282-.0175781-.1441407-.0140625-.2179688 0-1.0335937 0-2.0707031 0-3.1042969 0-.0386719 0-.08085935 0-.13359372h-5.06953125c-.49570313 0-.80507813-.309375-.80507813-.80859375 0-1.42382813 0-2.84414063 0-4.26796875 0-.49570313.30585938-.8015625.8015625-.8015625h4.93593748z"/><path d="m5.69882812 13.978125h-4.01132812c-.928125 0-1.6875-.8753906-1.6875-1.9511719v-10.06171872c0-1.07578125.75585938-1.95117188 1.6875-1.95117188h4.01132812c.34101563 0 .61523438.31992188.61523438.71015625 0 .39023438-.27421875.71015625-.61523438.71015625h-4.01132812c-.253125 0-.45703125.23554688-.45703125.52734375v10.06171875c0 .2917969.20390625.5273437.45703125.5273437h4.01132812c.34101563 0 .61523438.3199219.61523438.7101563s-.27773438.7171875-.61523438.7171875z"/></g></svg>\n        '}},o(t),c(n)]},e.network=o,e}({});
