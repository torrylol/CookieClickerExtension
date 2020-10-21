function update() {
    
    autoClick = parseInt(autoClick)
    
    cookies = parseInt(cookies)
    
    document.getElementById('cookiecount').value = cookies; 
    document.getElementById('ownedClickers').innerHTML = "You Own " + autoClick + " Autoclickers";
    document.getElementById('clickCost').innerHTML = "Current Price: C/" + ((autoClick+1) * 12)
    
}

var cookies = 0 + localStorage.getItem("cookies");
var autoClick = 0 + localStorage.getItem("autoClick");

function timer() {
    autoClick = parseInt(autoClick)
    cookies - parseInt(cookies)
    
    document.getElementById('cookiecount').value = cookies;
    
    cookies = cookies + autoClick;
    update()
}
autoClick = parseInt(autoClick)
cookies - parseInt(cookies)
setInterval(timer, 1000)

function clicked() {
    
    cookies = parseInt(cookies)
    autoClick = parseInt(autoClick)
    
    document.getElementById('unclicked-image-id').src="/img/cookie_clicked.png"
    
    "use strict";
    document.getElementById('unclicked-image-id').width="105";
    document.getElementById('unclicked-image-id').height="105";
    cookies = cookies + 1;
    
    setTimeout(function(){ document.getElementById('unclicked-image-id').width="100"; }, 100);   
    
    setTimeout(function(){ document.getElementById('unclicked-image-id').height="100"; }, 100);   
    
    setTimeout(function(){ document.getElementById('unclicked-image-id').src="/img/cookie_unclicked.png"; }, 100);   
    document.getElementById('cookiecount').value = cookies;
    save();
    
}

function buyAutoClick() {
    if (cookies >=((autoClick+1) + 12)) {
        cookies = cookies - ((autoClick) * 12);
        autoClick = autoClick + 1;
        update()
        
    }
}
   
function save() {
    
    cookies = parseInt(cookies)
    
    "use strict";
    localStorage.setItem("cookies", cookies);
    document.getElementById('cookiecount').value = cookies;
    
    autoClick = parseInt(autoClick)
    
    "use strict";
    localStorage.setItem("autoClick", autoClick)
    document.getElementById('ownedClickers').value = autoClick;
    update()

}

function reset() {
    
    cookies = parseInt(cookies)
    autoClick = parseInt(autoClick)
    
    cookies = 0;
    document.getElementById('cookiecount').value = cookies;
    localStorage.setItem("cookies", cookies);
    
    autoClick = 0;
    localStorage.setItem("autoClick", autoClick);
    

    save();
    
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('cookie-clicked');
    link.addEventListener('click', function() {
        clicked();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('reset-button');
    link.addEventListener('click', function() {
        reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('save-button');
    link.addEventListener('click', function() {
        save();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('load-button');
    link.addEventListener('click', function() {
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('buyClicker');
    link.addEventListener('click', function() {
        buyAutoClick()
    });
});

