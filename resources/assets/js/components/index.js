import Vue from 'vue'
import Icon from './image/Icon'
import Card from './container/Card'
import Child from './page/Child'
import Button from './form/Button'
import Checkbox from './form/Checkbox'
import { HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(Icon.name, Icon)
Vue.component(Card.name, Card)
Vue.component(Child.name, Child)
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
