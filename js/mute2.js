function toggleVideo2(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video-player2");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}