// declare const DomReady;
// DomReady.ready(function(){
if (window.location.href.match(/https:\/\/github.com\/(.*)\/pull\/(\d+)\/files/g)) {
    var els = document.getElementsByClassName('repohead-details-container');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        // if(el.style.width !== '980px'){
        //     continue;
        // }
        el.style.width = '95%';
    }
}
// });
//# sourceMappingURL=github.js.map