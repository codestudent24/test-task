import type { SelectChangeEvent } from '@mui/material';
import { Button, FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { FC, useState } from "react";
import { SUBJECTS_ENUM, formStyle } from "../../shared/constants";
import { mockTests } from "../../shared/mockTests";

import { useNavigate } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import { useAppDispatch } from '../../store/hooks';
import { setTest } from '../../store/testSlice';
import styles from './TestList.module.css';

const HumanReadableSubject = {
  [SUBJECTS_ENUM.math]: 'Математика',
  [SUBJECTS_ENUM.geography]: 'География'
}

type TestNameWithSlug = {
  name: string,
  slug: string,
}

export const TestList: FC = () => {
  const { firstName, isAdmin } = useAuth()

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [selectedSubject, setSelectedSubject] = useState<SUBJECTS_ENUM>(SUBJECTS_ENUM.math)
  const [selectedTest, setSelectedTest] = useState<TestNameWithSlug | null>(null)

  function handleSelectSubject(event: SelectChangeEvent<SUBJECTS_ENUM>) {
    const { value } = event.target
    setSelectedSubject(value as SUBJECTS_ENUM)
    setSelectedTest(null)
  }

  function handleSelectTest(name: string, slug: string) {
    setSelectedTest({ name, slug })
  }

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    const testsInSubject = mockTests[selectedSubject]
    const test = testsInSubject.find(test => test.slug === selectedTest?.slug)

    if (test) {
      dispatch(setTest({ slug: test.slug, tasks: test.tasks }))
      setTimeout(() => {
        const navigatePath = isAdmin ? '/edit-test' : '/test'
        navigate(navigatePath)
      }, 100)
    }
  }

  return (
    <FormControl sx={formStyle}>
      <Select
        labelId="select-subject-label"
        id="select-subject"
        value={selectedSubject}
        margin="dense"
        onChange={handleSelectSubject}
      >
        <MenuItem value={SUBJECTS_ENUM.math}>Математика</MenuItem>
        <MenuItem value={SUBJECTS_ENUM.geography}>География</MenuItem>
      </Select>
      <FormHelperText>Предмет</FormHelperText>

      {selectedSubject && mockTests[selectedSubject] && (
        mockTests[selectedSubject].map((test) => (
          <Button
            key={test.slug}
            type="button"
            sx={{
              margin: '0.5rem auto 0',
              width: '100%',
            }}
            onClick={() => { handleSelectTest(test.name, test.slug) }}
          >
            {test.name}
          </Button>
        ))
      )}
      <FormHelperText>Тест</FormHelperText>

      <p className={styles.selectInfo}>Имя: {firstName}</p>
      <p className={styles.selectInfo}>Предмет: {selectedSubject ? HumanReadableSubject[selectedSubject]: ''}</p>
      <p className={styles.selectInfo}>Тест: {selectedTest?.name}</p>

      <Button
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          margin: '1rem auto 0.5rem'
        }}>
          Начать тестирование
        </Button>
    </FormControl>
  )
}