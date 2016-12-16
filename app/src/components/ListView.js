import React from 'react'
import { Media, MediaLeft, Image, MediaContent, Content, Button, MediaRight } from 're-bulma'

const ListView = ({ users, getData }) => (
  <div>
    {users.map((user, index) => (
      <Media key={index}>
        <MediaLeft>
          <Image src={user.picture.thumbnail} />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>{user.name.first} {user.name.last}</strong> <small>{user.email}</small>
            </p>
          </Content>
        </MediaContent>
        <MediaRight>
          <Button delete onClick={() => getData()} />
        </MediaRight>
      </Media>
    ))}
  </div>
);

export default ListView
