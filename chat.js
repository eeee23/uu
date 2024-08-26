var yh_text = {};
var kf_text = {};
var yh_name = {};
var now_yh = [];
function sendData(data, name) {
  const dataStr = JSON.stringify(data);
  const url = `https://database.autumnrain.top/w?name=${name}&data=${dataStr}`;
  fetch(url)
   .then(response => response.text())
   .then(result => {
      console.log(result);
    })
   .catch(error => {
      console.error('Error:', error);
    });
}
function gData(name)
{
  fetch('https://database.autumnrain.top/g?name='+name)
  .then(response => {
  if (!response.ok) {
    throw new Error(`HTTP 错误！状态码: ${response.status}`);
  }
  return response.json();
  })
  .then(data => {
  console.log(data);
  })
  .catch(error => {
  console.error('获取 JSON 数据时出现错误:', error);
  });
}
function updata()
{
    sendData(yh_name,'yh_name');
    sendData(yh_text,'yh_text');
    sendData(kf_text,'kf_text');
    sendData(now_yh,'now_yh');
    yh_name = JSON.parse(gData('yh_name'));
    yh_text = JSON.parse(gData('yh_text'));
    kf_text = JSON.parse(gData('kf_text'));
    now_yh = JSON.parse(gData('now_yh'));
}
function gdata()
{
    yh_name = JSON.parse(gData('yh_name'));
    yh_text = JSON.parse(gData('yh_text'));
    kf_text = JSON.parse(gData('kf_text'));
    now_yh = JSON.parse(gData('now_yh'));
}
function getIPWithRetry(retryCount = 0, maxRetries = 5) {
    return new Promise((resolve, reject) => {
        fetch('https://api.ipify.org?format=json')
           .then(response => response.json())
           .then(data => resolve(data.ip))
           .catch(error => {
                console.error('Error fetching IP:', error);
                if (retryCount < maxRetries) {
                    return getIPWithRetry(retryCount + 1, maxRetries).then(resolve).catch(reject);
                } else {
                    reject(null);
                }
            });
    });
}
function gip() {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                const ip = await getIPWithRetry();
                resolve(ip);
            } catch (error) {
                console.error('Failed to get IP after retries.');
                reject(null);
            }
        })();
    });
}
function getIP()
{
    gip().then(result => {
        if (result) {
            // 保存到本地存储
            localStorage.setItem('ipAddress', result);
        }
    });
    return localStorage.getItem('ipAddress')
}
function wn()
{
    var un = localStorage.getItem('un');
    yh_name[getIP()] = un;
    console.log("un:"+un);
    console.log("yh_name:"+yh_name[getIP()]);
    updata();
}
function gn()
{
    return yh_name[getIP()];
}
function update()
{
    document.getElementById("chat").innerHTML = yh_text[gn()];
    console.log(yh_text[gn()])
}
function yh_send(tex)
{
    updata();
    if (yh_text[gn()] == undefined){yh_text[gn()] = `<div class="message outgoing"><p>`+tex+`</p></div>`;}
    else{yh_text[gn()] = yh_text[gn()] + `<div class="message outgoing"><p>`+tex+`</p></div>`;}
    if (kf_text[gn()] == undefined){kf_text[gn()] = `<div class="message incoming"><p>`+tex+`</p></div>`;}
    else{kf_text[gn()] = kf_text[gn()] + `<div class="message incoming"><p>`+tex+`</p></div>`;}
    var un = localStorage.getItem('un');
    now_yh.push(un);
    update();
    updata();
}
function kf_send(tex)
{
    if (yh_text[gn()] == undefined){kf_text[gn()] = `<div class="message outgoing"><p>`+tex+`</p></div>`;}
    else{kf_text[gn()] = kf_text[gn()] + `<div class="message outgoing"><p>`+tex+`</p></div>`;}
    if (yh_text[gn()] == undefined){yh_text[gn()] = `<div class="message incoming"><p>`+tex+`</p></div>`;}
    else{yh_text[gn()] = yh_text[gn()] + `<div class="message incoming"><p>`+tex+`</p></div>`;}
    update();
    updata();
}
function loadun()
{
    gdata();
    if (now_yh.length <= 0)
    {
        document.getElementById("tabs").innerHTML = `<div class="tab active-tab" onclick="openTab(event, 'tab1')">无</div>`;
        document.body.innerHTML = document.body.innerHTML + '<div id="tab1" class="tab-content" id="tab1">还没有人说话……</div>';
    }
    else{
        document.getElementById("tabs").innerHTML = `<div class="tab active-tab" onclick="openTab(event, 'tab1')">`+now_yh[0]+`</div>`;
        document.body.innerHTML = document.body.innerHTML + '<div id="tab'+i+'" class="tab-content" id="tab1"><div class="chat-card"><div class="chat-header"><div class="h2">'+now_yh[0]+'</div></div><div class="chat-body" id="chat"></div><div class="chat-footer"><input placeholder="请输入您的回答" type="text" id="inpyh"><button onclick="kf_send(document.getElementById("inpyh").value)">发送</button></div></div>'+yh_text[now_yh[0]]+'</div>';
        for(var i=1;i<=now_yh.length-1;i++)
        {
            document.getElementById("tabs").innerHTML = document.getElementById("tabs").innerHTML + '<div class="tab" onclick="openTab(event, tab'+i+')">'+now_yh[i]+'</div>';
            document.body.innerHTML = document.body.innerHTML + '<div id="tab'+i+'" class="tab-content" id="tab'+i+'"><div class="chat-card"><div class="chat-header"><div class="h2">'+now_yh[i]+'</div></div><div class="chat-body" id="chat"></div><div class="chat-footer"><input placeholder="请输入您的回答" type="text" id="inpyh"><button onclick="kf_send(document.getElementById("inpyh").value)">发送</button></div></div>'+yh_text[now_yh[i]]+'</div>';
        }
    }
    updata();
}
function user()
{
    gdata();
    var name = gn();
    var ip = getIP();
    document.getElementById("lin").href = "./user.css"
    document.body.innerHTML = '<div class="container"><img src="pic.jpg" alt="头像" class="avatar"><h2>'+name+'</h2><p>IP 地址：'+ip+'</p></div>';
    updata();
}
