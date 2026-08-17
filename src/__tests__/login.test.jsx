import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'
import LoginForm from '../components/LoginForm'

function renderWithProviders(ui){
  return render(<ChakraProvider>{ui}</ChakraProvider>)
}

test('shows validation errors for empty fields', async ()=>{
  renderWithProviders(<LoginForm />)
  const submit = screen.getByRole('button', { name: /login/i })
  await userEvent.click(submit)
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument()
})
