import React from "react"
import styled from "styled-components"
import ChatInput from './chatInput'
import ChatOutput from './chatOutput'
import store from './store'

const inputHeight = "4"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > :nth-child(1) {
    height: calc(100vh - ${inputHeight}rem);
  }
  > :nth-child(2) {
    height: ${inputHeight}rem;
  }
`

class ChatApp extends React.Component {
  handleNewEntry = (entry) => {
    store.entries.push(entry)
  }

  render() {
    return (
      <Container>
        <ChatOutput entries={store.entries}/>
        <ChatInput onNewEntry={this.handleNewEntry}/>
      </Container>
    )
  }
}

export default ChatApp