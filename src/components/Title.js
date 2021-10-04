import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  title: {
    letterSpacing: '4px',
    fontSize: '64px',
    color: '#303030',
    marginBottom: '0px'
  },
  emphasis: {
    backgroundColor: 'red',
    backgroundImage: 'linear-gradient(to right, #de6262, #ffb88c)',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent'
  }
})

const Title = () => {
  const styles = useStyles()
  return (
    <h1 className={styles.title}>
      CREATE. COMPLETE. <span className={styles.emphasis}>CONQUER.</span>
    </h1>
  )
}

export default Title
