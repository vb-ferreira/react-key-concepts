# Activity 6.2: Using CSS Modules for Style Scoping

Nesta atividade, você pegará o aplicativo final criado na Atividade 6.1 e o ajustará para usar CSS Modules. O objetivo é migrar os estilos de cada componente para um arquivo CSS específico do componente, que usa CSS Modules para o escopo de estilo. A interface do usuário final, portanto, terá a mesma aparência da atividade anterior.

No entanto, os estilos serão definidos no escopo do componente Form para que nomes de classe conflitantes não interfiram na estilização.

As etapas são as seguintes:

- Identifique os estilos que pertencem especificamente ao componente Form e mova-os para um novo arquivo CSS específico para o componente.
- Altere os seletores CSS para seletores de nome de classe e adicione classes aos elementos JSX conforme necessário (isso ocorre porque o CSS Modules exige seletores de nome de classe).
- Use o arquivo CSS específico do componente, conforme explicado ao longo deste capítulo, e atribua as classes CSS aos elementos JSX apropriados.
