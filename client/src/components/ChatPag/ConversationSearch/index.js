import React from 'react';
import './ConversationSearch.css';

export default function ConversationSearch(props) {
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          value={props.search}
          onChange={props.handleChangeSearch}
        />
      </div>
    );
}