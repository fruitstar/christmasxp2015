const Home = require( "xmas/home/Home" )
const About = require( "xmas/about/About" )
const Ui = require( "xmas/ui/Ui" )

class Xmas {

  constructor() {
    this._home = new Home()
    this._about = new About()

    this._current = null

    this._binds = {}
    this._binds.onChange = this._onChange.bind( this )
    this._binds.onHome = this._onHome.bind( this )
    this._binds.onAbout = this._onAbout.bind( this )
  }

  show() {
    page( "/", this._binds.onChange, this._binds.onHome )
    page( "/about", this._binds.onChange, this._binds.onAbout )

    // TweenLite.set( this, {
    //   delay: delay,
    //   onComplete: () => {
    page()
    // this._onHome() // tmp
      // }
    // })
  }

  _onChange( ctx, next ) {
    if( this._current ) {
      this._current.unbindEvents()
      this._current.hide( next )
    } else {
      next()
    }
  }

  _onHome() {
    this._current = this._home
    this._displayCurrent()
  }

  _onAbout() {
    this._current = this._about
    this._displayCurrent()
  }

  _displayCurrent() {
    this._current.bindEvents()
    this._current.show()
  }

}

module.exports = Xmas
