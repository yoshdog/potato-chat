import React from 'react'
import styled from 'styled-components'
import {observer} from "mobx-react"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Entry = styled.div`
  padding: 1rem;
  display: flex;
`

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
`

const Messages = styled.div`
  line-height: 1.2;
  > :not(:first-child){ margin-top: 0.25 rem; }
`

const ChatOutput = observer(({entries}) => (
  <Wrapper>
    {
      entries.map((entry, i) => (
      <Entry key={i}>
        <Avatar src={entry.user_avatar} />
        <Messages>
        {
          entry.messages.map((message, i) => (
            <div key={i}>{ message }</div>
          ))
        }
        </Messages>
      </Entry>
    ))
    }
  </Wrapper>
))

export default ChatOutput