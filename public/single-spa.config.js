var drumMachineApp = window.singleSpaAngularjs.default({
  angular: window.angular,
  domElementGetter: function () {
    return document.getElementById('drum-machine')
  },
  mainAngularModule: 'AngularDrumMachine',
  uiRouter: false,
  preserveGlobal: true,
  template: '<display-machine />',
})

window.singleSpa.registerApplication('drum-machine', drumMachineApp, function activityFunction(location) {
  return location.hash.startsWith('#/drums');
})

var helloWorldApp = {
  bootstrap: function() {
    return Promise.resolve()
  },
  mount: function() {
    return Promise.resolve().then(function() {
      alert('hello world')
    })
  },
  unmount: function() {
    return Promise.resolve()
  },
}
window.singleSpa.registerApplication('hello-world', helloWorldApp, function activityFunction(location) {
  return location.hash.startsWith('#/hello');
})

window.singleSpa.start()