import {render, screen} from '@testing-library/react'
import Main from '.'

describe('<Main/>', ()=>{
    it('should render the heading with default title', ()=> {
        //renderiza o componente
        const {container} = render(<Main/>)

        //busca o elemento e verifica a existencia dele
        expect(
            screen.getByRole('heading', {name : /react avançado/i})
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render custom title when provided', ()=> {
        render(<Main title="Custom Title" />)

        expect(
            screen.getByRole('heading', {name : /custom title/i})
        ).toBeInTheDocument()
    })

    it('should render description when provided', ()=> {
        render(<Main title="Test" description="Test Description" />)

        expect(
            screen.getByText(/test description/i)
        ).toBeInTheDocument()
    })

    it('should not render description when not provided', ()=> {
        render(<Main title="Test" />)

        expect(
            screen.queryByText(/test description/i)
        ).not.toBeInTheDocument()
    })
})