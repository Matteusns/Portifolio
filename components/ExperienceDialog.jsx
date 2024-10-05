import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";

const ExperienceDialog = ({ experiencia }) => {
  const linhas = experiencia.description.split("\n");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">
          <FaPlusCircle /> Descrição
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-5">
            <h3 className="h3 text-accent">{experiencia.company} ({experiencia.position})</h3>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            {linhas.map((linha, index) => (
              <p key={index}>
                {linha}
              </p>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button>Fechar </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExperienceDialog;
