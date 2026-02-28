import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Graph = () => {
  return (
    <div className='bg-black flex justify-center p-4 w-full'>
      <div className='w-full flex justify-center'>
        <GitHubCalendar 
          username="swamimalode07" 
          blockRadius={4}
          blockSize={15}
          blockMargin={6}
          fontSize={16}
          style={{ width: '100%' }}
          theme={{
            dark: ['#2a2a2a', '#909090', '#b8b8b8', '#dedede', '#ffffff'],
          }}
          colorScheme='dark'
        />
      </div>
    </div>
  )
}

export default Graph