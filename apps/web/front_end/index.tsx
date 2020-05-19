import * as React from 'react'
import ReactDom from 'react-dom'
import Button from '@material-ui/core/button'

type Props = {
  title: string
}

const App: React.FC<Props> = props => <Button variant="contained" color="primary">{`${props.title}`}</Button>

ReactDom.render(<App title={'Hello'}/>, document.getElementById('app'))
