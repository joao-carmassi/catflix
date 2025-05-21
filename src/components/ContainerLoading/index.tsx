import SpinnerCarregando from '../spinner-loading';

interface Props {
  pageSize?: string;
}

const ContainerLoading = ({ pageSize = 'min-h-svh' }: Props) => {
  return (
    <section className={`flex items-center justify-center ${pageSize}`}>
      <SpinnerCarregando />
    </section>
  );
};

export default ContainerLoading;
