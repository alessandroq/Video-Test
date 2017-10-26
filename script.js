$(document).ready(function() {
  // Block#: |Xi3dWj^b^icBPIugU%1
  function on_screen_showMainScreen() {
    try {
      // Block#: bllUkizUcO-|BE$?G|6R
      com.fc.JavaScriptDistLib.VideoLibrary.createVideoFromUrl('https://www.youtube.com/watch?v=2FMBSblpcrc',
        function(video) {
          try {
            // Block#: xd3^qcFY,O(*1Wl1sA{t
            com.fc.JavaScriptDistLib.VideoView.setProperty["Video"]("VideoView", video); // Block#: n|^L!?nMo`RjHdCT0m/)
            com.fc.JavaScriptDistLib.VideoView.play('VideoView')
          } catch(e) {
            com.fc.JavaScriptDistLib.handleExceptionNative(e);
          }
        },
        function(e) {
          let msg = 'Video loading error. This could due to wrong URL, or to the video hosting server now allowing cross domain operations.';
          let err = new Error(msg);
          com.fc.JavaScriptDistLib.handleExceptionNative(err);
        });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="MainScreen"]').on('show', on_screen_showMainScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showMainScreen'] = on_screen_showMainScreen;
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 220912-95126-439901-942518