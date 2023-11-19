import ButtonComponent from "../components/ui/ButtonComponent";
import StyledInput from "../components/ui/StyledInput";

export default function UiComponents() {
  return (
    <>
      <h1>UiComponents</h1>
      <div className="py-10">
        <h1 className="text-xl pb-5">Small buttons</h1>
        <ButtonComponent variant={"primary"} size={"small"}>
          Button 1
        </ButtonComponent>
        <ButtonComponent variant={"secondary"} size={"small"}>
          Button 2
        </ButtonComponent>

        <ButtonComponent variant={"success"} size={"small"}>
          Success Button
        </ButtonComponent>
        <ButtonComponent variant={"danger"} size={"small"}>
          Danger Button
        </ButtonComponent>
      </div>
      <div className="py-5">
        <h1 className="text-xl pb-5">Default buttons</h1>
        <ButtonComponent variant={"primary"} size={"default"}>
          Button 1
        </ButtonComponent>
        <ButtonComponent variant={"secondary"} size={"default"}>
          Button 2
        </ButtonComponent>

        <ButtonComponent variant={"success"} size={"default"}>
          Success Button
        </ButtonComponent>
        <ButtonComponent variant={"danger"} size={"default"}>
          Danger Button
        </ButtonComponent>
      </div>
      <div className="py-5">
        <h1 className="text-xl pb-5">Big buttons</h1>
        <ButtonComponent variant={"primary"} size={"large"}>
          Button 1
        </ButtonComponent>
        <ButtonComponent variant={"secondary"} size={"large"}>
          Button 2
        </ButtonComponent>

        <ButtonComponent variant={"success"} size={"large"}>
          Success Button
        </ButtonComponent>
        <ButtonComponent variant={"danger"} size={"large"}>
          Danger Button
        </ButtonComponent>
      </div>
      <StyledInput placeholder="Input teste" label="Label teste" />
      <div className="py-5"></div>
    </>
  );
}
