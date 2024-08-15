### Properties Documentation

- **category** (`@NotNull Category`):
    - The category or division to which the stage belongs, such as a particular round or level within a tournament. This field is mandatory and cannot be null.

- **id** (`int`):
    - A unique identifier for the stage.

- **name** (`@NotNull String`):
    - The official name of the stage. This could refer to the stage's round name, like "Quarterfinals" or "Group Stage". This field is mandatory and cannot be null.

- **primaryColorHex** (`String`):
    - The primary color of the stage, represented as a hexadecimal color code. This color may be used for branding, visual representation, or theming specific to this stage.

- **secondaryColorHex** (`String`):
    - The secondary color of the stage, also represented as a hexadecimal color code. This complements the primary color in the stage's visual identity.

- **slug** (`@NotNull String`):
    - A URL-friendly identifier for the stage, often used in web applications for routing or identifying the stage in a readable manner. This field is mandatory and cannot be null.