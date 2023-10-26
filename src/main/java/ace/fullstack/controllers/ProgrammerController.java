package ace.fullstack.controllers;

import ace.fullstack.dto.ProgrammerDto;
import ace.fullstack.service.ProgrammerService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/programmers")
@AllArgsConstructor
public class ProgrammerController {

    private ProgrammerService programmerService;

    @PostMapping
    public ResponseEntity<ProgrammerDto> addProgrammer(@RequestBody ProgrammerDto programmerDto) {
        ProgrammerDto savedProgrammer = programmerService.addProgrammer(programmerDto);
        return new ResponseEntity<>(savedProgrammer, HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<ProgrammerDto>> getAllProgrammers() {
        List <ProgrammerDto> programmers = programmerService.getAllProgrammers();
        return ResponseEntity.ok(programmers);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProgrammerDto> getProgrammer(@PathVariable("id") Long ProgrammerId) {
        System.out.println("The value of ProgrammerId is: " + ProgrammerId);
        ProgrammerDto programmer = programmerService.getProgrammer(ProgrammerId);

        return new ResponseEntity<>(programmer,HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<ProgrammerDto> updateProgrammer(@RequestBody ProgrammerDto programmerDto,
                                                          @PathVariable("id") Long id) {
        ProgrammerDto updatedProgrammers = programmerService.updateProgrammer(programmerDto, id);
        return new ResponseEntity<>(updatedProgrammers, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProgrammer(@PathVariable("id") Long programmerid){
        programmerService.deleteProgrammer(programmerid);
        return ResponseEntity.ok("Programmer deleted succesfully");

    }

}
