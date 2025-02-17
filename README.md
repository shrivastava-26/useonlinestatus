# `useOnlineStatus`

A simple and effective React hook to detect the online💚/offline❤️ status of the user in real-time, with **live connection indicators**

## 🚀 Installation

You can easily install `useOnlineStatus` using npm or yarn. Here's how to get started:

### With npm:
    npm install @shrivastava/usestatus

## 💡 Usage
Once installed, you can start using the useOnlineStatus hook in your React components. The hook returns a boolean value indicating whether the user is online or offline, which is visually represented by colorful emojis.

  Example:
               
      import React from 'react'; 
      import useStatus from '@shrivastava/usestatus';
      
      const App = () => {
        const isOnline = useStatus();
      
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
          
            <h1 style={{ fontSize: '2em' }}>
              {isOnline ? ( <>🟢 You are online 💚</> ) : <> 🔴 You are offline ❤️ </> )}
            </h1>
          </div>
        );
      };
      
      export default App;


### 🎨 Features

- **Real-Time Monitoring**: The hook automatically updates the status whenever the user's network changes (online/offline).
- **Live Connection Indicators**: Emojis 💚❤️ give a visual cue to users based on their network status.
- **Easy to Use**: Just import and call the hook in your component. No additional setup is required.

### ⚡ Benefits
- **Seamless App Behavior**: Adjust app features dynamically based on the network status.
- **Small Footprint**: The hook is highly efficient and doesn't add unnecessary bloat to your project.

### 🔗 Links

- **GitHub Repository**: [https://github.com/shrivastava-26/useonlinestatus](https://github.com/shrivastava-26/useonlinestatus)
- **npm Package**: `@shrivastava/usestatus`

### 📄 License
MIT License. Feel free to contribute or use the package in your projects.



