import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 24px 32px 24px',
    '@media (max-width: 680px)': {
      flexDirection: 'column',
      margin: '24px'
    }
  },
  box: {
    width: '500px',
    maxWidth: '100%',
    marginRight: '16px',
    '@media (max-width: 680px)': {
      marginBottom: '16px',
      width: '70vw'
    }
  },
  textField: {
    '& input': {
      '@media (max-width: 680px)': {
        textAlign: 'center'
      }
    }
  },
  button: {
    background: 'inherit',
    color: '#000',
    transitionProperty: 'backgroundColor color',
    transitionDuration: '175ms 175ms',
    '&:hover': {
      background: 'linear-gradient(to right, #de6262, #ffb88c)'
    }
  }
})

const Form = ({ onSubmit, onChange, value }) => {
  const styles = useStyles()

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <Box className={styles.box}>
        <TextField
          className={styles.textField}
          fullWidth
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder='What shall we accomplish today?'
        />
      </Box>
      <Button className={styles.button} type='submit' variant='outlined' disabled={value === ''}>
        Add Task
      </Button>
    </form>
  )
}

export default Form
