[![Banner-Code.png](https://i.postimg.cc/G25Hq41B/Banner-Code.png)](https://postimg.cc/WF0N4bzj)

## ButtonNeon
Este componente muestra un botón con un efecto neón. Al hacer hover sobre él, los bordes del botón se iluminan y aparece una sombra alrededor.
## Uso
Para utilizar este componente basta con importarlo y renderizarlo en tu código:

# GalleryItem

Este componente muestra cada uno de los elementos de la galería de imágenes. Se compone de una imagen, un título y una descripción. Al hacer hover sobre el componente, se activa el efecto neon en el botón de visualizar galería.

## Propiedades

-   `image`: la ruta de la imagen a mostrar en el componente.
-   `title`: el título de la galería.
-   `description`: la descripción de la galería.
-   `number_images`: el número de imágenes que contiene la galería.
-   `id`: el identificador de la galería.
# GalleryMain

Este componente es un contenedor que muestra una galería de imágenes con información adicional. Cada imagen es una instancia del componente `GalleryItem`.

## Propiedades

-   `id`: una cadena de texto que determina qué imágenes deben mostrarse en la galería.

## Funcionamiento

Este componente es un contenedor para mostrar una lista de elementos de galería a través de la importación del componente `GalleryItem`. Al inicio, se hace una solicitud HTTP a la dirección URL especificada para obtener los datos de la galería. Mientras se espera la respuesta de la solicitud, se muestra un spinner de carga. Si la solicitud tiene éxito, se procesa la respuesta y se muestra cada elemento de la galería en pantalla a través del componente `GalleryItem`. Si la solicitud falla, se muestra un mensaje de error.

Este componente toma una propiedad de entrada llamada `id`, que se pasa al método `showGalleryItems` y se utiliza para filtrar los elementos de la galería que se deben mostrar. Si no se proporciona un `id`, se muestran todos los elementos de la galería.

Este componente utiliza el estado de React para almacenar los datos de la galería, el estado de carga pendiente y el mensaje de error en caso de que la solicitud falla. También utiliza el hook de efecto de React para realizar la solicitud HTTP y actualizar el estado en consecuencia.
