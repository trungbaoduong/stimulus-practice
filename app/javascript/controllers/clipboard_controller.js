import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]
  static classes = [ "supported" ]

  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }

  copy(event) {
    // to prevent browser trigger event
    event.preventDefault()

    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}