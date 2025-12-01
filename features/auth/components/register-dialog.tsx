import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RegisterForm from "./register-form";

interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RegisterDialog({ open, onOpenChange }: RegisterDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="py-8 [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-2xl">
            Fire Sign Up
          </DialogTitle>
          <DialogDescription className="text-md flex items-center justify-center">
            Fill in the contact details below and click save.
          </DialogDescription>
        </DialogHeader>
        <RegisterForm closeDialog={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
