import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'; // Import Axios for API calls

function Tasks() {
  const [open, setOpen] = useState(false); // State to control the modal
  const [title, setTitle] = useState(''); // Task title
  const [description, setDescription] = useState(''); // Task description
  const [deadline, setDeadline] = useState(''); // Task deadline

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  const handleAddTask = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      if (!token) {
        throw new Error('User not authenticated.');
      }

      // API call to add task
      const response = await axios.post(
        'http://localhost:5000/tasks', // Replace with your backend endpoint
        {
          title,
          description,
          deadline,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        }
      );

      console.log('Task added:', response.data); // Log the response
      setOpen(false); // Close the modal
      setTitle('');
      setDescription('');
      setDeadline('');
    } catch (error) {
      console.error('Error adding task:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3 }}>
        {/* Card 1 */}
        <Paper sx={{ p: 3, width: '30%', borderRadius: '25px' }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>Task Management</span>
            <IconButton onClick={handleOpen} color="primary">
              <AddIcon />
            </IconButton>
          </Typography>
        </Paper>

        {/* Card 2 */}
        <Paper sx={{ p: 3, width: '30%', borderRadius: '25px' }}>
          <Typography variant="h6" fontWeight="bold">
            Ranked Tasks
          </Typography>
          <Typography variant="h4" color="primary">
            +430
          </Typography>
        </Paper>

        {/* Card 3 */}
        <Paper sx={{ p: 3, width: '30%', borderRadius: '25px' }}>
          <Typography variant="h6" fontWeight="bold">
            Unranked Tasks
          </Typography>
          <Typography variant="h4" color="primary">
            +430
          </Typography>
        </Paper>
      </Box>

      {/* Modal for Adding Task */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
            <TextField
              label="Deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddTask} variant="contained" color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Tasks;
