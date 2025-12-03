import * as S from './styles';

interface MainProps {
    title?: string;
    description?: string;
}

const Main = ({ title = 'React avançado', description }: MainProps) => (
    <S.Wrapper>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
    </S.Wrapper>
)

export default Main;