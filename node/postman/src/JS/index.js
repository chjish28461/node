class Postman {
    constructor(){
        this.fetchInterfaceList.bind(this);
        this.clickItem.bind(this);
        this.clickTab.bind(this);
        this.deleteTab.bind(this);
    }
    fetchInterfaceList(){//获取所有接口列表
        fetch("/api/get_list")
        .then(res=> res.json())
        .then(res=>{
            let html='';
            for(let i=0,len=res.length;i<len;i++){
                let d = res[i];
                // let cla = !i?"item active":"item";
                html += `<div class="item" onclick="postman.clickItem(this);" method="${d.method}" Url="${d.Url}" name="${d.name}">
                            <div class="method">${d.method.toUpperCase()}</div>
                            <div class="name" title="${d.name}">${i+1}.${d.name}</div>
                        </div>`;
            }
            $(".list")[0].innerHTML = html;
        })
    }
    clickItem(ele){//点击左侧接口列表
        $(".list .item").removeClass("active");
        ele.className = "item active";
        ele=$(ele);
        let isExist = false;
        $(".tags .title .tab").each(function(i){
            $(this).removeClass("active");
            if($(this).attr("name")==ele.attr("name")){
                isExist=true;
                $(this).addClass("active");
            }
        })
        $(".tags .content .main").each(function(i){
            $(this).addClass("hide");
            if($(this).attr("name")==ele.attr("name")){
                $(this).removeClass("hide");
            }
        })
        if(isExist) return ;
        let html1='',html2='';
        html1 += `<li onClick="postman.clickTab(this);" class="tab active" method="${ele.attr("method")}" Url="${ele.attr("Url")}" name="${ele.attr("name")}">
                    <span class="method">${ele.attr("method").toUpperCase()}</span>
                    <span class="name">${ele.attr("name")}</span>
                    <span class="close" onclick="postman.deleteTab(this.parentNode,event);">×</span>
                </li>`;
        html2 += `<div class="main" name="${ele.attr("name")}">
					<div class="main1">
						<div class="info">
							<div class="method">${ele.attr("method").toUpperCase()}</div>
							<div class="url">${ele.attr("Url")}</div>
							<div class="btn">
								<button>Send</button>
							</div>
						</div>
					</div>
					<div class="main2">
						<div class="header">JSON(application/json)</div>
						<div class="data">
							<textarea cols="30" rows="10"></textarea>
						</div>
					</div>
					<div class="main3">
						<div class="tips">Response</div>
						<div class="response"></div>
					</div>
				</div>`
        $(".tags .title .tab").removeClass("active");
        $(".tags .title").append(html1);
        $(".tags .content .main").addClass("hide");
        $(".tags .content").append(html2);
    }
    clickTab(ele){//点击tab项目切换功能
        console.log(ele);
        $(".tags .tab").removeClass("active");
        $(ele).addClass("active");
        $(".tags .content .main").each(function(i){
            $(this).addClass("hide");
            if($(this).attr("name")==$(ele).attr("name")){
                $(this).removeClass("hide");
            }
        })
    }
    deleteTab(ele,e){//点击tab项的关闭按钮
        e=e||window.event;
        e.stopPropagation();
        let prev = $(ele).prev();
        let next = $(ele).next();
        if(prev.length)
            this.clickTab(prev[0]);
        if(!prev.length&&next.length)
            this.clickTab(next[0]);
        $(ele).remove();
        $(".tags .content .main").each(function(i){
            if($(this).attr("name")==$(ele).attr("name")){
                $(this).remove();
            }
        })
    }
}
let postman = new Postman();
postman.fetchInterfaceList();