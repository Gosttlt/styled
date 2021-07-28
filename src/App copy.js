import styled from 'styled-components'
import Title from './components/Title'
import { Flex } from './components/Flex'
import { Console } from './components/Console'
import { Button } from './components/Button'

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding: 2rem;
background:#fff;
`

function App() {

  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>
          123321
        </Title>
      </Flex>
      <Flex direction="column">
        <Console color="green" />
        <Button align="flex-end" outline>
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App;
