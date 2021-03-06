import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Tab, Tabs, Typography, Box, Grow } from '@material-ui/core'
import TaskItem from './TaskItem'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFF',
    height: 'fit-content',
    maxHeight: '60vh',
    width: '50vw',
    maxWidth: 800,
    padding: '16px 24px',
    boxShadow: `
      2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07)
    `,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'height 250ms',
    '@media (max-width: 1330px)': {
      maxWidth: '100%',
      width: '70vw'
    },
    '@media (max-width: 860px)': {
      maxWidth: '100%',
      width: '70vw'
    },
    '@media (max-width: 590px)': {
      maxWidth: '100%',
      width: '85vw',
      maxHeight: '50vh'
    }
  },
  panelBox: {
    padding: '16px',
    width: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)'
    }
  }
})

const TabPanel = props => {
  const { children, value, index, ...other } = props
  const styles = useStyles()
  return (
    <div
      className={styles.panelBox}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const TaskPanel = ({ allTasks, incompleteTasks, proceedingTasks, completedTasks }) => {
  const [activeTab, setActiveTab] = useState(0)
  const styles = useStyles()

  const handleTabChange = (event, newValue) => setActiveTab(newValue)

  return (
    <Grow in={allTasks.length > 0}>
      <Box className={styles.container}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: '100%' }}>
          <Tabs value={activeTab} onChange={handleTabChange} variant='scrollable' scrollButtons='auto'>
            <Tab disabled={allTasks.length === 0} label={`All Tasks (${allTasks.length})`} />
            <Tab disabled={incompleteTasks.length === 0} label={`Incomplete (${incompleteTasks.length})`} />
            <Tab disabled={proceedingTasks.length === 0} label={`In Progress (${proceedingTasks.length})`} />
            <Tab disabled={completedTasks.length === 0} label={`Completed (${completedTasks.length})`} />
          </Tabs>
        </Box>
        <TabPanel value={activeTab} index={0}>
          <TaskItem data={allTasks} showStatus />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <TaskItem data={incompleteTasks} />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <TaskItem data={proceedingTasks} />{' '}
        </TabPanel>
        <TabPanel value={activeTab} index={3}>
          <TaskItem data={completedTasks} />
        </TabPanel>
      </Box>
    </Grow>
  )
}

export default TaskPanel
