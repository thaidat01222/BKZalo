export default function Profile() {
    return (
        <div className="user-profile">
            <dic className="user-infor">
                <div className="proflie-avt">
                    <img src='./avt.svg' />
                </div>
                <h3 className="profile-user-name">
                    User name
                </h3>
                <div className="active">
                    Active 2 h ago
                </div>
            </dic>
            <div className="setting-chat">
                <div className="set-c mute-conversation">
                    <img src='./noti-chat.svg' />
                    Mute conversation
                </div>
                <div className="set-c ignore">
                    <img src='./stop.svg' />
                    Ignore message
                </div>
                <div className="set-c block">
                    <img src='./block.svg' />
                    Block
                </div>
                <div className="set-c report">
                    <img src='./warning.svg' />
                    Something's wrong
                </div>
            </div>
            <div className="file-shared">
                File shared
            </div>
        </div>
    )
}