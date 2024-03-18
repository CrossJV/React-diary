import styles from './FilmList.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmCardProps } from '../FilmCard/FilmCard.props';
import { FilmListProps } from './FilmList.props';

function FilmList({ data }: FilmListProps) {
	if(!data.length) {
		return <p>Фильмов не найдено</p>;
	}

	return (
		<ul className={styles['film-list']}>
			{data.map((elem: FilmCardProps) => {
				return (
					<FilmCard {...elem} key={elem['#IMDB_ID']}/>
				);
			})}
		</ul>
	);
}

export default FilmList;
