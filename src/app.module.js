angular.module('pow', [])
.run(['$templateCache', function($templateCache) {
  $templateCache.put('player.html', '<div class="player" style="box-sizing: border-box;margin: 0 auto;width: 345px;"> <div class="controls" style="box-sizing: border-box;background: #fafafa;padding: 8px;"> <svg id="playButton" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 41.999 41.999" style="box-sizing: border-box;fill: #595959;width: 20px;margin: 3px 0 0 0;font-size: 16px;text-align: center;display: inline-block;cursor: pointer;background: transparent;border: none;outline: none;"><path d="M36.068 20.176l-29-20C6.761-0.035 6.363-0.057 6.035 0.114 5.706 0.287 5.5 0.627 5.5 0.999v40c0 0.372 0.206 0.713 0.535 0.886 0.146 0.076 0.306 0.114 0.465 0.114 0.199 0 0.397-0.06 0.568-0.177l29-20c0.271-0.187 0.432-0.494 0.432-0.823S36.338 20.363 36.068 20.176z" style="box-sizing: border-box;"></path></svg> <div class="track" style="box-sizing: border-box;position: relative;width: 236px;margin: 7px 0 6px 16px;height: 5px;background-color: #666;display: inline-block;vertical-align: center;"> <div class="progress" style="box-sizing: border-box;position: absolute;width: 0%;height: 100%;background: #4487f2;"></div><div class="scrubber" style="box-sizing: border-box;position: absolute;width: 18px;height: 18px;border-radius: 50%;margin: -6.5px 0 0 -9px;background: #4487f2;cursor: pointer;"></div></div><svg id="downloadButton" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 471.2 471.2" style="box-sizing: border-box;fill: #595959;width: 20px;margin: 3px 0 0 15px;font-size: 16px;text-align: center;display: inline-block;cursor: pointer;background: transparent;border: none;outline: none;"><path d="M457.7 230.2c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8C471.2 236.3 465.2 230.2 457.7 230.2z" style="box-sizing: border-box;"></path><path d="M226.1 346.8c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.3-5.3 5.3-13.8 0-19.1 -5.3-5.3-13.8-5.3-19.1 0l-62.7 62.8V30.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1 0 -5.3 5.3-5.3 13.8 0 19.1L226.1 346.8z" style="box-sizing: border-box;"></path></svg> </div></div>');
}]);
