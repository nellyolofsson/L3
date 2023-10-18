/**
 * Module for the HomeController.
 *
 */
export class HomeController {
  index (req, res, next) {
    res.render('home/index')
  }
}
