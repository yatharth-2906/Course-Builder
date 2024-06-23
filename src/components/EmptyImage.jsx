import styles from "./EmptyImage.module.css";

function EmptyImage() {
  return (
    <div className={styles.empty_image_container}>
      <img className={styles.empty_image} src="./src/assets/empty_image.png" />
    </div>
  );
}

export default EmptyImage;
