import * as React from 'react'
import * as ReactDom from 'react-dom'
import Button from '@material-ui/core/button'

type Props = {
  title: string
}

const App: React.FC<Props> = props => <Button variant="contained" color="primary">{`${props.title}`}</Button>

ReactDom.render(<App title={'HELLO WORLD'}/>, document.getElementById('app'))
