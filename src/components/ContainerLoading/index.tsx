import SpinnerCircle3 from '../spinner-09';

interface Props {
  pageSize?: string;
}

const ContainerLoading = ({ pageSize = 'min-h-svh' }: Props) => {
  return (
    <section className={`flex items-center justify-center ${pageSize}`}>
      <SpinnerCircle3 />
    </section>
  );
};

export default ContainerLoading;
